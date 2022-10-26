const mysql2 = require("mysql2");
const jwt = require("jsonwebtoken");
const moment = require("moment");
require("dotenv").config();
const imageToUri = require("image-to-uri");
const path = require("path");

class User {
  constructor() {
    this.userConnection = mysql2.createConnection({
      host: "localhost",
      user: "root",
      password: "password",
      database: "ecommerce",
    });
  }
  async createToken(email) {
    const token = jwt.sign({ email }, process.env.JWT_SECRET, {
      expiresIn: "2h",
    });
    this.userConnection.query(
      `update users set JWTToken = '${token}' where Email = '${email}'`
    );
    return token;
  }

  async createUser(body, res) {
    this.userConnection.query(
      `insert into users (${Object.keys(body).join(
        ", "
      )}) values (${Object.values(body)
        .map((value) => `"${value}"`)
        .join(", ")})`,
      async (err, result) => {
        if (err) {
          console.log(err.sqlMessage);
          res.status(500).send(err.sqlMessage);
        } else {
          const token = await this.createToken(body.Email);
          res.status(200).send({ token: token });
        }
      }
    );
  }

  async tempUser(body, res) {
    this.userConnection.query(
      `insert into temp_users (${Object.keys(body).join(
        ", "
      )}) values (${Object.values(body)
        .map((value) => `"${value}"`)
        .join(", ")})`,
      async (err, result) => {
        if (err) {
          console.log(err.sqlMessage);
          res.status(500).send(err.sqlMessage);
        } else {
          this.sendOTP({ PhoneNumber: body.PhoneNumber }, res, "temp_users");
        }
      }
    );
  }

  async SignIn(body, res) {
    this.userConnection.query(
      `select Password, Email from users where ${Object.keys(body)
        .map((key) => (key === "Password" ? "" : key))
        .join("")} = '${Object.values(body)
        .map((value) => (body["Password"] === value ? "" : value))
        .join("")}'`,
      async (err, result) => {
        if (err) {
          console.log(err.sqlMessage);
          res.status(500).send(err.sqlMessage);
        } else {
          if (body.Password === result[0]?.Password) {
            const token = await this.createToken(result[0]?.Email);
            res.status(200).send({ token: token });
          } else {
            res.status(200).send("wrong credential");
          }
        }
      }
    );
  }

  async sendOTP(body, res, database) {
    const OTP = Math.floor(1000 + Math.random() * 9000);
    database = database || "users";
    this.userConnection.query(
      `select PhoneNumber from ${database} where ${Object.keys(body).join(
        ""
      )} = '${Object.values(body).join("")}'`,
      (err, result) => {
        if (err) {
          console.log(err.sqlMessage);
          res.status(500).send(err.sqlMessage);
        } else {
          this.userConnection.query(
            `update ${database} set OTP = ${OTP}, OTPSentTime = '${moment().format(
              "YYYY-MM-DD HH:mm:ss"
            )}' where PhoneNumber = '${result[0]["PhoneNumber"]}'`
          );
          res.status(200).send(`OTP sent to ${result[0]["PhoneNumber"]}`);
        }
      }
    );
    console.log(OTP);
  }

  async checkOTP(body, res) {
    if (body.NewUser) {
      this.userConnection.query(
        `select * from temp_users where ${Object.keys(body)
          .map((key) => (key === "OTP" ? "" : key === "NewUser" ? "" : key))
          .join("")} = '${Object.values(body)
          .map((value) =>
            body["OTP"] === value ? "" : body["NewUser"] === value ? "" : value
          )
          .join("")}'`,
        async (err, result) => {
          if (err) {
            console.log(err.sqlMessage);
            res.status(500).send(err.sqlMessage);
          } else {
            if (moment().diff(moment(result[0].OTPSentTime), "seconds") > 600) {
              res.status(200).send("Time Limit Reached");
            } else {
              if (body.OTP === `${result[0].OTP}`) {
                delete result[0].OTPSentTime;
                delete result[0].OTP;
                delete result[0].UserID;
                this.createUser(result[0], res);
              } else {
                res.status(400).send("invalid OTP");
              }
            }
            this.userConnection.query(
              `delete from temp_users where Email = "${result[0].Email}"`,
              async (err, result) => {
                if (err) {
                  throw err;
                } else {
                  console.log(result);
                }
              }
            );
          }
        }
      );
    } else {
      delete body.NewUser;
      this.userConnection.query(
        `select OTP, OTPSentTime, Email from users where ${Object.keys(body)
          .map((key) => (key === "OTP" ? "" : key))
          .join("")} = '${Object.values(body)
          .map((value) => (body["OTP"] === value ? "" : value))
          .join("")}'`,
        async (err, result) => {
          if (err) {
            res.status(500).send(err.sqlMessage);
          } else {
            if (moment().diff(moment(result[0].OTPSentTime), "seconds") > 600) {
              res.send("Time Limit Reached");
            } else {
              console.log(body.OTP, result[0].OTP);
              if (body.OTP === result[0].OTP) {
                const token = await this.createToken(result[0]?.Email);
                res.send({ token: token });
              } else {
                res.send("invalid OTP");
              }
            }
          }
        }
      );
    }
  }

  async updateUserAddresses(user, body, res) {
    this.userConnection.query(
      `select * from user_addresses where UserEmail = '${user.email}'`,
      async (err, result) => {
        if (err) throw err;
        body.addresses.forEach((address) => {
          try {
            if (
              result
                .map((obj) => obj.AddressID)
                .join("")
                .includes(address.AddressID)
            ) {
              this.updateAddress(user, address);
            } else {
              this.addAddress(user, address);
            }
          } catch (err) {
            throw err;
          }
          res.status(200).send("Updated");
        });
      }
    );
  }

  async updateAddress(user, address) {
    this.userConnection.query(
      `update user_addresses set AddressLine = '${address.AddressLine}', PhoneNumber = '${address.PhoneNumber}' where UserEmail = '${user.email}' and AddressID = ${address.AddressID}`,
      async (err, result) => {
        if (err) throw err;
        console.log(result);
      }
    );
  }
  async addAddress(user, address) {
    this.userConnection.query(
      `insert into user_addresses (AddressLine, PhoneNumber, UserEmail) values ('${address.AddressLine}', '${address.PhoneNumber}', '${user.email}')`,
      async (err, result) => {
        if (err) throw err;
        console.log(result);
      }
    );
  }

  async updateUser(user, body, res) {
    this.userConnection.query(
      `update users set ${Object.keys(body)} = '${Object.values(
        body
      )}' where Email = '${user["email"]}'`,
      (err, result) => {
        if (err) {
          res.send(err.sqlMessage);
        } else {
          res.status(200).send("Updated Successfully");
        }
      }
    );
  }

  async getUser(user, res) {
    this.userConnection.query(
      `select FirstName, LastName, PhoneNumber, Email from users where Email='${user.email}'`,
      async (err, result) => {
        if (err) {
          res.status(500).send(err.sqlMessage);
        } else {
          user.email === "affanhamid007@gmail.com"
            ? (result[0].isAdmin = true)
            : (isAdmin = false);
          result.length !== 0
            ? res.status(200).send({ ...result[0] })
            : res.status(400);
        }
      }
    );
  }

  async getUserAddresses(user, res) {
    this.userConnection.query(
      `select AddressID, AddressLine, PhoneNumber from user_addresses where UserEmail='${user.email}'`,
      async (err, result) => {
        if (err) {
          res.status(500).send(err.sqlMessage);
        } else {
          res.status(200).send(result);
        }
      }
    );
  }

  async getOrders(user, res) {
    this.userConnection.query(
      `select * from orders where UserEmail='${user.email}'`,
      async (err, result) => {
        if (err) {
          res.status(500).send(err.sqlMessage);
        } else {
          res.status(200).send(result);
        }
      }
    );
  }

  async getProfilePic(user, res) {
    this.userConnection.query(
      `select ProfilePic from users where Email = "${user.email}"`,
      async (err, result) => {
        if (err) {
          throw err;
          res.status(500).send(err.sqlMessage);
        } else {
          result[0].ProfilePic
            ? res.json({
                image: imageToUri(
                  path.join(
                    __dirname,
                    `../userImages/${result[0].ProfilePic}.webp`
                  )
                ),
              })
            : res.json({});
        }
      }
    );
  }

  async updateProfilePic(req, res) {
    this.userConnection.query(
      `update users set ProfilePic = "${req.savedName}" where Email = "${req.user.email}"`,
      async (err, result) => {
        if (err) {
          res.status(500).send(err.sqlMessage);
        } else {
          res.status(200).send(result);
        }
      }
    );
  }
}

module.exports = User;
