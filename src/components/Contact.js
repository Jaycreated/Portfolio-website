import React from 'react'

const Contact = () => {
    return (
        <div>
            
        <h2>Contact Me</h2>

        <div class="contact-wrapper">

            <form name="contact" action="/message_send.html" class="contact-form" netlify-honeypot="bot-field"
                data-netlify="true">

                <h3 class="form-head">Send Me A Note</h3>

                <input required placeholder="Name" class="input" type="text" name="name" id="name" autocomplete="off" />


                <input required placeholder="Email Address" class="input" type="email" name="email" id="email"
                    autocomplete="off" />

                <input placeholder="Subject" class="input" type="text" name="subject" id="subject" autocomplete="off" />


                <textarea required placeholder="Your Message" name="message" class="input" id="message"></textarea>


                <button class="submit btn" type="submit">Send Mail</button>

            </form>

            <div class="contact-details">
                <div class="contact-container phone" onclick="window.open('tel:+919207980389');">
                    <div class="contact-icon">
                        <i class="fa fa-phone"></i>
                    </div>
                    <div class="contact-info">
                        <a href="tel:+919207980389" class="contact-data">+91 9207980389</a>
                    </div>
                </div>

                <div class="contact-container mail-id" onclick="window.open('mailto:contact@aromalanil.me');">
                    <div class="contact-icon">
                        <i class="fa fa-envelope"></i>
                    </div>
                    <div class="contact-info">
                        <a href="mailto:aromalanilkannan@gmail.com" class="contact-data">aromlanilkannan@gmail.com</a>
                    </div>
                </div>

                <div class="s-medias">
                    <h3 class="s-head">Catch Me On</h3>

                    <div class="social-media-pack">
                        <a id="facebook" href="https://www.facebook.com/aromal.anil.369" target="_blank" rel="noopener"
                            alt="facebook">
                            <i class="fa fa-facebook contact-social"></i>
                        </a>
                        <a id="instagram" href="https://www.instagram.com/aromal.anil/" target="_blank" rel="noopener"
                            alt="instagram">
                            <i class="fa fa-instagram contact-social"></i>
                        </a>
                        <a id="whatsapp"
                            href="https://api.whatsapp.com/send?phone=919207980389&text=Hi%20Aromal%20%F0%9F%91%8B"
                            target="_blank" rel="noopener" alt="whatsapp">
                            <i class="fa fa-whatsapp contact-social"></i>
                        </a>
                        <a id="twitter" href="https://www.twitter.com/aromalanil5" target="_blank" rel="noopener"
                            alt="twitter">
                            <i class="fa fa-twitter  contact-social"></i>
                        </a>
                        <a id="telegram" id="telegram" href="https://telegram.me/aromalanil" target="_blank"
                            rel="noopener" alt="telegram">
                            <i class="fa fa-telegram contact-social"></i>
                        </a>
                        <a id="linkedin" href="https://linkedin.com/in/aromalanil/" target="_blank" rel="noopener"
                            alt="linkedin">
                            <i class="fa fa-linkedin contact-social"></i>
                        </a>
                        <a id="github" href="https://www.github.com/aromalanil" target="_blank" rel="noopener"
                            alt="github">
                            <i class="fa fa-github contact-social"></i>
                        </a>
                    </div>
                </div>
            </div>

        </div>
        </div>
    )
}

export default Contact
