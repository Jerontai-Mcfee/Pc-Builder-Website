// DO WE NEED TO REQUIRE MONGOOSE?

// const Component = require('./component');


const ShoppedComponent = require('./shoppedComponent');

const CasesSchema = require('./casesSchema');
const CoolersSchema = require('./coolersSchema');
const CpuSchema = require('./cpuSchema');
const GpuSchema = require('./gpuSchema');
const MotherboardSchema = require('./motherboardSchema');
const PsuSchema = require('./psuSchema');
const RamSchema = require('./ramSchema');
const StorageSchema = require('./storageSchema');

const User = require('./user');

module.exports = {User, ShoppedComponent, CasesSchema, CoolersSchema, CpuSchema, GpuSchema, MotherboardSchema, PsuSchema, RamSchema, StorageSchema}