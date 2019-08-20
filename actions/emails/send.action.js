const nodemailer = require("nodemailer")
const SendgridTranspor = require("nodemailer-sendgrid-transport")

/**
 * Ngirim email pake sendgrid
 * 
 * @param params - ['to', 'subject', 'text', 'html']
 * 
 */

class SendMail {
    constructor (params) {
        this.params = params
    }


async ngirimemail() {
    try {
        const options = {
            auth : {
                api_user : process.env.EMAIL_USERNAME,
                api_key : process.env.EMAIL_PASSWORD,
            },
            secure: false
        }

        const transporter = await nodemailer.createTransport(
            SendgridTranspor(options)
        )

        const data = {
            to : this.params.to.toString(), // String
            from : 'cintadama46@gmail.com', // bebas aee
            subject: this.params.text,
            text: this.params.text,
            html: this.params.html
        }

        setTimeout(async() => {
            // Send Email
            return await transporter.sendMail(data, (error, resp) =>{
                if (error) { 
                    console.log(error)
                }
            })
        },600)
    } catch (err) {
        throw err
    }
} 
}

module.exports = SendMail