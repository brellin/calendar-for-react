import moment from 'moment'

export const monthVars = date => {

    const prevMonth = moment(date).subtract(1, 'month').daysInMonth()

    const firstDoM = moment(date).startOf('month').format('d')

    const frontBlanks = []
    for (let i = 0; i < firstDoM; i++) frontBlanks.push(i)

    const daysInMonth = moment(date).daysInMonth()

    const backBlanks = []
    for (let i = 0; i < (42 - daysInMonth - frontBlanks.length); i++) backBlanks.push(i)

    const monthDays = []
    for (let i = 1; i <= daysInMonth; i++) monthDays.push(i)

    return { prevMonth, frontBlanks, backBlanks, monthDays }

}
