const express = require("express");
const app = express();

let pieRepo = require("./pieRepo");
let router = express.Router();

router.get("/", function (req, res, next) {
  pieRepo.get(
    function (data) {
      res.status(200).json({
        status: 200,
        statusText: "OK",
        message: "all pies retrieved",
        data: data,
      });
    },
    function (err) {
      next(err);
    }
  );
});

router.get("/search", function (req, res, next) {
  let searchObject = {
    id: req.query.id,
    name: req.query.name,
  };

  pieRepo.search(
    searchObject,
    function (data) {
      res.status(200).json({
        status: 200,
        statusText: "OK",
        message: "all pies retrieved",
        data: data,
      });
    },
    function (err) {
      next(err);
    }
  );
});

router.get("/:id", function (req, res, next) {
  pieRepo.getById(
    req.params.id,
    function (data) {
      if (data) {
        res.status(200).json({
          status: 200,
          statusText: "OK",
          message: "all pies retrieved",
          data: data,
        });
      } else {
        res.status(404).json({
          status: 404,
          statusText: "not found",
          message: `the pie ${req.params.id} is not found`,
          error: {
            code: "NOT_FOUND",
            message: `the pie ${req.params.id} is not found`,
          },
        });
      }
    },
    function (err) {
      next(err);
    }
  );
});

app.use("/api/", router);

var server = app.listen(5000, function () {
  console.log("Node server is running on http://localhost:5000...");
});
