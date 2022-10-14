const router  =  require('express').Router();
const Contact = require("../controller/contactController");

//Author
router.post("/addContact", Contact.createContact);
router.get("/Contact", Contact.getContacts);
router.get("/single-contact", Contact.getContact);
router.put("/update-contact", Contact.updateContact);
router.delete("/delete-contact", Contact.deleteContact);


module.exports = router;
