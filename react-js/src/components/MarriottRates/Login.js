import React from 'react';

const Login = (props) => {

  return (
    <div id="LogInForm60ee">
      <script type="text/mi-context" name="LogInForm60ee" defer="defer">
        {
          /* "enableSocialLogin": "false",
         "textColor": "standard-110" */
        }
      </script>
      <div className="tile-signIn-overlay tile-sign-in-home l-m-padding-left-five-quarters l-m-padding-right-five-quarters t-bg-standard-10" data-component-id="LogInForm_06_60ee" data-component-name="signIn" data-component-endpoint="/aries-auth/signInFormDetails.comp">
        <div className="js-rewards-bar l-sign-in-bar l-padding-top-three-quarters" style={{display: "block"}}>
          <div className="l-center-align">
            <span className="js-signin-btn l-loyality-signin-tile">
              <a href="#" className="m-button m-button-primary-alt analytics-click t-font-ms l-s-margin-bottom l-m-margin-bottom-none l-l-margin-bottom-none">Sign In</a>
            </span>
            <span>
              <a href="/loyalty/createAccount/createAccountPage1.mi" className="m-button m-button-secondary-alt analytics-click js-join-now-link t-font-ms" data-analytics={{ 'location': 'MarriottRewardsBar', 'description': 'Join Now' }}> Join Now </a>
            </span>
          </div>
        </div>
        <div className="l-rewards-anonymous-form js-anonymous-form is-hidden" style={{"display": "none"}}>
          <div className="l-clear">
            <form method="post" name="directLoginForm" action="https://www.marriott.com/aries-auth/loginWithCredentials.comp" className=" l-form-signin-home ">
              <div id="email-validation" className="m-message-box m-message-box-error align-message-box l-display-none"> Please correct the following and try again. <span className="t-message">User ID and/or password is incorrect</span>
              </div>
              <input type="hidden" name="returnUrl" value="/default.mi" />
              <input type="hidden" name="errorUrl" value="/sign-in-error.mi" />
              <div className="l-signin-padding-bottom l-padding-top-double l-clear l-m-margin-left-double l-m-margin-right-double l-l-margin-left-none l-l-margin-right-none">
                <div className="l-clear">
                  <div className="l-clear l-s-col-4 l-m-col-8 l-l-col-4">
                    <div className="l-email-info l-margin-bottom-five-quarters l-clear l-form-group"> <label for="my-account-userid" className="t-color-standard-20">Email or Member Number</label>
                      <input type="text" name="userID" id="my-account-userid" maxlength="80" autocomplete="off" className="l-width-max js-emailValidation" />
                    </div>
                    <div className="t-color-standard-20 t-font-xs l-margin-bottom"> &nbsp; </div>
                  </div>
                  <div className="l-clear l-s-col-4 l-m-col-8 l-l-col-4 l-xl-col-4">
                    <div className="l-password-info l-margin-bottom-five-quarters l-form-group">
                      <label for="my-account-password" className="t-color-standard-20">Password</label>
                      <input type="password" name="password" id="my-account-password" maxlength="20" autocomplete="off" /> </div>
                    <div>
                      <div className="l-password-actions l-margin-none l-s-margin-bottom-double">
                        <input name="rememberMe" id="my-ac-rememberme" type="checkbox" value="true" checked="checked" />
                        <label for="my-ac-rememberme" className="t-color-standard-20">Remember me</label>  </div>
                    </div>
                  </div>
                  <div className="l-clear l-s-col-4 l-m-col-8 l-l-col-4 l-xl-col-4">
                    <div className="l-sign-in-button l-clear">
                      <button id="l-account-signin-button" type="submit" name="submit" className="l-s-col-4 l-m-col-8 l-l-col-split-2of4 l-xl-col-split-2of4 l-margin-bottom l-account-signin-button t-font-ms l-float-left analytics-click m-button m-button-primary-alt l-padding-top l-l-margin-bottom-five-quarters l-padding-bottomjs-btn-submit" data-analytics={{ 'description': 'Marriott Rewards Sign In', 'delay': 'true' }}> Sign In </button>
                      <a href="" className="l-s-col-4 l-m-col-8 l-l-col-split-1of4 l-xl-col-split-2of4 t-font-ms m-button-cta l-m-margin-bottom-five-quarters l-s-text-align-center l-padding-top l-padding-bottom t-color-standard-20 js-cancel-link">Cancel</a>  </div>
                  </div>
                </div>
                <div className="l-clear l-width-max">
                  <div className="t-font-s l-s-float-none l-m-float-left">
                    <span className="l-forgot-password">
                      <a href="/forgotPassword.mi" className="analytics-click t-color-standard-20" title="" data-analytics={{ 'location': 'MarriottRewardsBar' }}>Forgot password</a>
                    </span>
                  </div>
                  <div className="t-font-s t-color-standard-20 l-float-left l-margin-left-half l-margin-right-half is-visible-l is-hidden-m">|</div>
                  <div className="t-font-s l-margin-top-three-quarters l-m-margin-top-none l-s-float-none l-m-float-right l-l-float-left">   <a href="/loyalty/createAccount/activateAccountChallenge.mi" className="analytics-click t-color-standard-20" title="">Activate online account</a>   </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;