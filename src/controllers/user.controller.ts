import User from '../models/user.model'
import express from "express";
// const auth = require("../middleware/auth.middleware")

export default {
  login: async (req: express.Request, res: express.Response) => {
    try {
      const userName = req.body.userName;
      const password = req.body.password;

      const user = await User.findByCredentials(userName, password);
      if (!user) {
        return res
          .status(401)
          .send({ error: "Login failed! Check authentication credentials" });
      }

      const { tokenDevices } = req.body;
      const token = await user.generateAuthToken(tokenDevices);

      res.send({ user, token });
    } catch (error) {
      // res.status(400).send(error);
      res.send({ error: true });
    }
  },

};
