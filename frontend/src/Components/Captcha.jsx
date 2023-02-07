export function loadCaptchaLib() {
    const script = document.createElement('script');

    script.src = `https://www.google.com/recaptcha/enterprise.js?render=${process.env.REACT_APP_RECAPTCHA_SITE_KEY}`;
    script.async = true;

    document.body.appendChild(script);
}

export default function getToken(action, succFunc, errFunc) {
    const grecaptcha = window.grecaptcha;
    grecaptcha.enterprise.ready(() => {
        grecaptcha.enterprise.execute(process.env.REACT_APP_RECAPTCHA_SITE_KEY, { action: action })
            .then(succFunc)
            .catch(errFunc)
    });
}