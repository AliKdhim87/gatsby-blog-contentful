const messages = {
    errors: {
        generalError: "Sorry, something went wrong."
    },
    success:{
        sendEmail:"The email has been sending successfully"
    }
}

const apiUrls = {
    apiSendEmailUrl: '/.netlify/functions/sendEmail'
}

export default {...messages,... apiUrls}
