function sum(data) {
  if (!data || data === 0) {
    return 0 + ' d ' + 0 + ' h ' + 0 + ' m'
  } else {
    const days = (data / 24).toFixed(0)
    const hours = (parseInt(data.toString().split('.')[0] % 24).toFixed(0))
    let mins = (parseInt(data.toString().split('.')[1])/ 10) * 60
    if (isNaN(mins)) {
      mins = 0
    }
    return days + ' d ' + hours + ' h ' + mins + ' m'
  }
}

module.exports = sum;
