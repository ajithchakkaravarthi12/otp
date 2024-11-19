function generateOTP() {
    let otp = Math.floor(1000 + Math.random() * 9000)
    localStorage.setItem('otp', otp)
    document.getElementById('otpMessage').textContent = `Your OTP is ${otp}`

    setTimeout(() => {
        localStorage.removeItem('otp');
        document.getElementById('otpMessage').textContent = 'OTP expired. Please generate a new one.';
    }, 60000)
}

function verifyOTP() {
    let enteredOtp = document.getElementById('otpInput').value
    let storedOtp = localStorage.getItem('otp')
    let message = document.getElementById('verifyMessage')

    if (enteredOtp === storedOtp) {
        message.textContent = 'OTP Verified Successfully!';
        message.style.color = 'green'
    } else {
        message.textContent = 'Invalid OTP. Please try again.'
        message.style.color = 'red'
    }
}


document.getElementById('generateOtpBtn').addEventListener('click', generateOTP)
document.getElementById('verifyOtpBtn').addEventListener('click', verifyOTP)
