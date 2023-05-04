const winston = require('winston');
const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, printf } = format;

const customFormat = printf(({ level, message, label, timestamp }) => {
    return `${timestamp} [${label}] ${level}: ${message}`;
});

const logger = createLogger({
    format: combine(
        label({ label: 'right meow!' }),
        timestamp(),
        customFormat
    ),
    transports: [new transports.Console(), new winston.transports.File({ filename: 'combined.log' })]
});
module.exports={
    LOGGER: logger
}