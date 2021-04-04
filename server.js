//server.js
const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/index");
const path = require("path");
const PORT = process.env.PORT || 3001;
require("dotenv").config();

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api", router);

mongoose.connect(process.env.MONGODB_URI, {
	usedNewUrlParser: true,
	useFindAndModify: false,
	useUnifiedTopology: true,
});
mongoose.connection.once("open", function () {
	console.log("Connected to the Database");
});
mongoose.connection.on("error", function (error) {
	console.log("Mongoose connection error:" + error);
});

if (process.env.NODE_ENV === "production") {
	app.use(express.static("client/build"));

	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
	});
}

app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}`);
});
