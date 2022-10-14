const { response } = require("express");
const contactDetails = require("../models/authorSchema");

class Contact {
  createContact = async (req, res) => {
    try {
      const { name, age, mobile_number, email, profession } = req.body;
      if (!name) {
        throw {
          message: "Please enter your full-name!",
        };
      }
      if (!age) {
        throw {
          message: "Please enter your age!",
        };
      }
      if (!mobile_number) {
        throw {
          message: "Please enter valid mobile number!",
        };
      }
      if (!email){
        throw {
          message: "Please enter a valid email-ID!",
        };
      }
      if (!profession) {
        throw {
          message: "Please enter your profession!",
        };
      }
      const response = await contactDetails.create({ name, age, mobile_number, email, profession });
      res.send({
        status: true,
        response: response,
        message: "Successfully Created profile",
      });
    } catch (error) {
      res.send({
        status: false,
        response: error.message,
      });
    }
  };

  getContacts = async (req, res) => {
    const response = await contactDetails.find();
    res.send(response);
  };

  getContact = async (req, res) => {
    const _id = req.query._id;
    const response = await contactDetails.findOne({ _id: _id });
    res.send(response);
  };

  updateContact = async (req, res) => {
    const id = req.body.id;
    const name = req.body.name;
    const response = await contactDetails.updateMany(

      { _id: id },
      { name: name },
    );
    res.send(response);
  };

  deleteContact = async (req, res) => {
    const id = req.body.id;
    const name = req.body.name
    const response = await contactDetails.deleteMany(
      { _id: id },
      {name:name});
    res.send(response);
  };
}

module.exports = new Contact();

