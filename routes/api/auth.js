require("dotenv").config({ path: "../.env" });
const express = require("express");
const jwt = require("jwt");
const bcrypt = require("bcryptjs");
const { check, validationResult } = require("express-validator");
