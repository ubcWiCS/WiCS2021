import React from 'react'

const MailChimpForm = () => {
  return (
    <div className="mailchimp-form ml-0" 
                dangerouslySetInnerHTML={{ __html: 
                `
                    <div id="mc_embed_shell">
                    <link href="//cdn-images.mailchimp.com/embedcode/classic-061523.css" rel="stylesheet" type="text/css">
                   
                    <div id="mc_embed_signup">
                        <form action="https://ubcwics.us21.list-manage.com/subscribe/post?u=4d61e9a5664cb96d340a8ebf0&amp;id=e41b821ff3&amp;f_id=00afb7e1f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank">
                            <div id="mc_embed_signup_scroll">
                                <div class="mc-field-group">
                                <input type="email" name="EMAIL" class="required email" id="mce-EMAIL" placeholder="Enter your email address" required="" value=""></div>
                                <div id="mce-responses" class="clear foot">
                                    <div class="response" id="mce-error-response" style="display: none;"></div>
                                    <div class="response" id="mce-success-response" style="display: none;"></div>
                                </div>
                                <div aria-hidden="true" style="position: absolute; left: -5000px;">
                                    /* real people should not fill this in and expect good things - do not remove this or risk form bot signups */
                                    <input type="text" name="b_4d61e9a5664cb96d340a8ebf0_e41b821ff3" tabindex="-1" value="">
                                </div>
                                <div class="optionalParent">
                                    <div class="clear foot">
                                        <input type="submit" name="subscribe" id="mc-embedded-subscribe" class="button" value="Subscribe">
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
              <script type="text/javascript" src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"></script><script type="text/javascript">(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';}(jQuery));var $mcj = jQuery.noConflict(true);</script></div>` }}
                >
              </div>
  )
}

export default MailChimpForm