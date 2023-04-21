const express = require("express");

const tempAddress = {
  "0x87fa35a68e5c8bfa7e5d75ab90570d859577dd2f": true,
  "0x5d5352cec9875fde59b7b5a576292ddf37c2a97d": false,
  "0x9bc79cd3c87eacabaab0fb437234e6f604364da9": false,
  "0xe457618f26fed4cde21e2e1ed4269ea7ccde95b4": true,
  "0xf5d18c155702452415b325f74f194dfad73c7b04": true,
};

const tempConf = [
  {
    collection: "0x9bc79cd3c87eacabaab0fb437234e6f604364da9",
    tokenRange: ["1", "2"],
  },
  {
    collection: "0x87fa35a68e5c8bfa7e5d75ab90570d859577dd2f",
    tokenRange: ["1", "2", "3", "6"],
  },
  {
    collection: "0x5d5352cec9875fde59b7b5a576292ddf37c2a97d",
    tokenRange: ["1", "2", "7", "8"],
  },
  {
    collection: "0xe457618f26fed4cde21e2e1ed4269ea7ccde95b4",
    tokenRange: ["1", "2"],
  },
];

const router = express.Router();

//============================//
//        User Info           //
//============================//
router.get("/get_gate_conf", (req, res, next) => {
  const { gate_id } = req.query;
  return res.send(tempConf[gate_id]);
});

router.get("/check_access", (req, res, next) => {
  const { address, id } = req.query;
  return res.send(tempAddress[address] || false);
});

module.exports = router;
