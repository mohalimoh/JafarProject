const express = require("express");
const router = express.Router();
const { SendResponse } = require("../../util/utility");
const queries = require("../../util/T-SQL/queries");
const setting = require("../../app-setting");
const sworm = require("sworm");
const db = sworm.db(setting.db.sqlConfig);

router.route('/')
    // .get(async (req, res) => {
    //     SendResponse(req, res, { capitan: 'loaded' })
    // })
    .get(async (req, res) => {
        console.log("req", req)
        let result = await db.query(`select V.VesselId,V.VesselName,v.GrossTonage,v.VesselType,F.CountryName as FlagName,V.Flag ,V.Nationality,N.CountryName as NationalityName,v.VesselName,V.NumOfBays,v.ActiveCraneQty,v.CallSign ,v.VesselLength 
        from Vessels as V
        inner join Countries as F on F.CountryId = v.Flag
        inner join Countries as N on N.CountryId = V.Nationality`)
        console.log("result", result)
        SendResponse(req, res, result)
    })
    .post(async (req, res) => {
        SendResponse(req, res, { capitan: 'Added' })
    })
    .put(async (req, res) => {
        SendResponse(req, res, { capitan: 'Updated' })
    })
    .delete(async (req, res) => {
        SendResponse(req, res, { capitan: 'Deleted' })
    })

module.exports = router;
