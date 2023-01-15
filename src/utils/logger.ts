import pino from 'pino'
import pretty from 'pino-pretty'
import dayjs from "dayjs"
const stream = pretty({
    colorize: true,
    customPrettifiers: {
        time: () => `time: ${dayjs().format()}`,
    }
})
const logger = pino(stream)

export default logger;