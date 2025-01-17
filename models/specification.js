const mongoose = require('mongoose');

const specificationSchema = new mongoose.Schema({
  model: { type: String, required: true },
  pvInput: {
    maxPvInputPower: String,
    mpptTrackingVoltageRange: String,
    ratedVoltage: String,
    maxPvInputVoltageVoc: String,
    maxPvInputCurrent: String,
    mpptTrackingChannels: String,
  },
  batteryAndCharging: {
    batteryType: String,
    ratedBatteryVoltage: String,
    batteryVoltageRange: String,
    maxPvChargingCurrent: String,
    maxAcChargingCurrent: String,
    maxChargingCurrent: String,
  },
  gridConnectedOperation: {
    ratedOutputPower: String,
    ratedOutputVoltage: String,
    gridVoltageRange: String,
    ratedOutputFrequency: String,
    frequencyRange: String,
    ratedOutputCurrent: String,
    powerFactor: String,
  },
  offGridOperation: {
    ratedInputVoltage: String,
    mainsInputVoltageRange: String,
    ratedInputFrequency: String,
    inputFrequencyRange: String,
  },
  acOutput: {
    ratedOutputPower: String,
    ratedOutputVoltage: String,
    outputVoltageAccuracy: String,
    outputFrequencyAccuracy: String,
    outputWave: String,
  },
  mixedOperation: {
    ratedInputVoltage: String,
    mainsInputVoltageRange: String,
    ratedInputFrequency: String,
    inputFrequencyRange: String,
    acOutput: {
      ratedOutputPower: String,
      ratedVoltage: String,
      outputCurrent: String,
    },
  },
  generalParameters: {
    maxConversionEfficiency: String,
    mpptTrackingEfficiency: String,
    transferTime: String,
    display: String,
    coolingMethod: String,
    communication: String,
    protectionDegree: String,
    installation: String,
  },
  protection: {
    batteryLowVoltageAlarm: String,
    batteryLowVoltageProtection: String,
    antiIslandingProtection: String,
    overloadPowerProtection: String,
    outputShortCircuitProtection: String,
    temperatureProtection: String,
  },
  environment: {
    operatingTemperature: String,
    storageTemperature: String,
    noise: String,
    elevation: String,
    humidity: String,
  },
  dimensionsAndWeight: {
    productSize: String,
    packageSize: String,
    netWeight: String,
    grossWeight: String,
  },
});

module.exports = mongoose.model('Specification', specificationSchema);
