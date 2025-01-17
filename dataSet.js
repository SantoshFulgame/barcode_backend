const Specification = require('./models/specification');

// Data for the three models
const specificationsData = [
  {
    model: "XH 3300 - Alpha",
    pvInput: {
      maxPvInputPower: "5000W",
      mpptTrackingVoltageRange: "40Vdc-450Vdc",
      ratedVoltage: "360Vdc",
      maxPvInputVoltageVoc: "500Vdc",
      maxPvInputCurrent: "18A",
      mpptTrackingChannels: "1 Routed"
    },
    batteryAndCharging: {
      batteryType: "Lead acid Battery/Lithium Battery",
      ratedBatteryVoltage: "24Vdc",
      batteryVoltageRange: "21-30Vdc (default)",
      maxPvChargingCurrent: "120A",
      maxAcChargingCurrent: "80A",
      maxChargingCurrent: "120A"
    },
    gridConnectedOperation: {
      ratedOutputPower: "3300W",
      ratedOutputVoltage: "220Vac / 230Vac / 240Vac",
      gridVoltageRange: "187Vac ~ 264Vac",
      ratedOutputFrequency: "50Hz / 60Hz",
      frequencyRange: "47Hz~52Hz(50Hz),57Hz~62Hz(60Hz)",
      ratedOutputCurrent: "14.5A/13.9A/13.3A",
      powerFactor: "> 0.98(Rated Power)"
    },
    offGridOperation: {
      ratedInputVoltage: "220V/ 230V / 240V",
      mainsInputVoltageRange: "165Vac-280Vac / 120Vac~280Vac (Can be set)",
      ratedInputFrequency: "50Hz / 60Hz",
      inputFrequencyRange: "45Hz~55Hz(50Hz),55Hz~65Hz(60Hz)"
    },
    acOutput: {
      ratedOutputPower: "3300W",
      ratedOutputVoltage: "220V / 230V / 240V",
      outputVoltageAccuracy: "±2%",
      outputFrequencyAccuracy: "±1%",
      outputWave: "Pure Sine Wave"
    },
    mixedOperation: {
      ratedInputVoltage: "220V / 230V / 240V",
      mainsInputVoltageRange: "187Vac-264Vac",
      ratedInputFrequency: "50Hz /60Hz",
      inputFrequencyRange: "47Hz~52Hz(50Hz),57Hz-62Hz(60Hz)",
      acOutput: {
        ratedOutputPower: "3300W",
        ratedVoltage: "220Vac / 230Vac / 240Vac",
        outputCurrent: "14.5A/13.9A/13.3A"
      }
    },
    generalParameters: {
      maxConversionEfficiency: "94% (peak value)",
      mpptTrackingEfficiency: "≥99.9",
      transferTime: "10ms(Typical value)",
      display: "LCD+LED",
      coolingMethod: "Cooling fan in intelligent control",
      communication: "RS485/Mobile APP(WIFI Monitoring or GPRS monitoring)(Optional)",
      protectionDegree: "IP20",
      installation: "Wall-Mounted"
    },
    protection: {
      batteryLowVoltageAlarm: "22Vdc (default value)",
      batteryLowVoltageProtection: "21Vdc (default value)",
      antiIslandingProtection: "≤2S",
      overloadPowerProtection: "Automatic Protection (battery mode), Circuit Breaker or Insurance (AC mode)",
      outputShortCircuitProtection: "Automatic Protection (battery mode),Circuit Breaker or Insurance (AC mode)",
      temperatureProtection: "> 90°C (turn off inverter and charging)"
    },
    environment: {
      operatingTemperature: "-10°C~50°C",
      storageTemperature: "-15°C~60°C",
      noise: "≤55dB",
      elevation: "2000m ( More than derating)",
      humidity: "0%~95% ,No condensation"
    },
    dimensionsAndWeight: {
      productSize: "325*275*102",
      packageSize: "400*330*167",
      netWeight: "6",
      grossWeight: "6.5"
    }
  },
  {
    model: "XH 5000 - Alpha",
    pvInput: {
      maxPvInputPower: "7000W",
      mpptTrackingVoltageRange: "40Vdc-500Vdc",
      ratedVoltage: "400Vdc",
      maxPvInputVoltageVoc: "600Vdc",
      maxPvInputCurrent: "20A",
      mpptTrackingChannels: "2 Routed"
    },
    batteryAndCharging: {
      batteryType: "Lithium Battery",
      ratedBatteryVoltage: "48Vdc",
      batteryVoltageRange: "45-54Vdc (default)",
      maxPvChargingCurrent: "150A",
      maxAcChargingCurrent: "100A",
      maxChargingCurrent: "150A"
    },
    gridConnectedOperation: {
      ratedOutputPower: "5000W",
      ratedOutputVoltage: "230Vac / 240Vac",
      gridVoltageRange: "187Vac ~ 264Vac",
      ratedOutputFrequency: "50Hz / 60Hz",
      frequencyRange: "47Hz~52Hz(50Hz),57Hz~62Hz(60Hz)",
      ratedOutputCurrent: "21.7A/20.8A",
      powerFactor: "> 0.98(Rated Power)"
    },
    offGridOperation: {
      ratedInputVoltage: "230V / 240V",
      mainsInputVoltageRange: "165Vac-280Vac",
      ratedInputFrequency: "50Hz / 60Hz",
      inputFrequencyRange: "45Hz~55Hz(50Hz),55Hz~65Hz(60Hz)"
    },
    acOutput: {
      ratedOutputPower: "5000W",
      ratedOutputVoltage: "230V / 240V",
      outputVoltageAccuracy: "±1%",
      outputFrequencyAccuracy: "±0.5%",
      outputWave: "Pure Sine Wave"
    },
    mixedOperation: {
      ratedInputVoltage: "230V / 240V",
      mainsInputVoltageRange: "187Vac-264Vac",
      ratedInputFrequency: "50Hz / 60Hz",
      inputFrequencyRange: "47Hz~52Hz(50Hz),57Hz~62Hz(60Hz)",
      acOutput: {
        ratedOutputPower: "5000W",
        ratedVoltage: "230Vac / 240Vac",
        outputCurrent: "21.7A/20.8A"
      }
    },
    generalParameters: {
      maxConversionEfficiency: "96% (peak value)",
      mpptTrackingEfficiency: "≥99.9%",
      transferTime: "10ms(Typical value)",
      display: "LCD+LED",
      coolingMethod: "Cooling fan in intelligent control",
      communication: "RS485/WIFI Monitoring (Optional)",
      protectionDegree: "IP20",
      installation: "Wall-Mounted"
    },
    protection: {
      batteryLowVoltageAlarm: "46Vdc",
      batteryLowVoltageProtection: "45Vdc",
      antiIslandingProtection: "≤2S",
      overloadPowerProtection: "Automatic Protection",
      outputShortCircuitProtection: "Automatic Protection",
      temperatureProtection: "> 90°C"
    },
    environment: {
      operatingTemperature: "-10°C~55°C",
      storageTemperature: "-15°C~60°C",
      noise: "≤50dB",
      elevation: "3000m (derating above 2000m)",
      humidity: "0%~95%, No condensation"
    },
    dimensionsAndWeight: {
      productSize: "400*320*120",
      packageSize: "470*370*180",
      netWeight: "8",
      grossWeight: "8.5"
    }
  },
  {
    model: "XH 6300 - Alpha",
    pvInput: {
      maxPvInputPower: "8000W",
      mpptTrackingVoltageRange: "50Vdc-500Vdc",
      ratedVoltage: "450Vdc",
      maxPvInputVoltageVoc: "650Vdc",
      maxPvInputCurrent: "22A",
      mpptTrackingChannels: "3 Routed"
    },
    batteryAndCharging: {
      batteryType: "Lithium Battery",
      ratedBatteryVoltage: "48Vdc",
      batteryVoltageRange: "45-54Vdc",
      maxPvChargingCurrent: "180A",
      maxAcChargingCurrent: "120A",
      maxChargingCurrent: "180A"
    },
    gridConnectedOperation: {
      ratedOutputPower: "6300W",
      ratedOutputVoltage: "230Vac / 240Vac",
      gridVoltageRange: "180Vac ~ 270Vac",
      ratedOutputFrequency: "50Hz / 60Hz",
      frequencyRange: "47Hz~52Hz(50Hz),57Hz~62Hz(60Hz)",
      ratedOutputCurrent: "27.4A / 26.3A",
      powerFactor: "> 0.98 (Rated Power)"
    },
    offGridOperation: {
      ratedInputVoltage: "230V / 240V",
      mainsInputVoltageRange: "160Vac-280Vac",
      ratedInputFrequency: "50Hz / 60Hz",
      inputFrequencyRange: "45Hz~55Hz(50Hz),55Hz~65Hz(60Hz)"
    },
    acOutput: {
      ratedOutputPower: "6300W",
      ratedOutputVoltage: "230V / 240V",
      outputVoltageAccuracy: "±1%",
      outputFrequencyAccuracy: "±0.5%",
      outputWave: "Pure Sine Wave"
    },
    mixedOperation: {
      ratedInputVoltage: "230V / 240V",
      mainsInputVoltageRange: "180Vac-270Vac",
      ratedInputFrequency: "50Hz / 60Hz",
      inputFrequencyRange: "47Hz~52Hz(50Hz),57Hz~62Hz(60Hz)",
      acOutput: {
        ratedOutputPower: "6300W",
        ratedVoltage: "230Vac / 240Vac",
        outputCurrent: "27.4A / 26.3A"
      }
    },
    generalParameters: {
      maxConversionEfficiency: "96.5% (peak value)",
      mpptTrackingEfficiency: "≥99.9%",
      transferTime: "10ms (Typical value)",
      display: "LCD+LED",
      coolingMethod: "Cooling fan in intelligent control",
      communication: "RS485/WIFI Monitoring (Optional)",
      protectionDegree: "IP20",
      installation: "Wall-Mounted"
    },
    protection: {
      batteryLowVoltageAlarm: "46Vdc",
      batteryLowVoltageProtection: "45Vdc",
      antiIslandingProtection: "≤2S",
      overloadPowerProtection: "Automatic Protection",
      outputShortCircuitProtection: "Automatic Protection",
      temperatureProtection: "> 90°C"
    },
    environment: {
      operatingTemperature: "-10°C~55°C",
      storageTemperature: "-15°C~60°C",
      noise: "≤50dB",
      elevation: "3000m (derating above 2000m)",
      humidity: "0%~95%, No condensation"
    },
    dimensionsAndWeight: {
      productSize: "450*350*150",
      packageSize: "520*420*200",
      netWeight: "10",
      grossWeight: "10.5"
    }
  }
];

module.exports = specificationsData;
