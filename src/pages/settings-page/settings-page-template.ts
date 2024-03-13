// language=hbs

export default `
    <div class="{{className}}">
        <form class="settings-data">
            <div class="settings-page__img">
                {{{ settingsImg }}}
                {{{ settingsLinkImg }}}
            </div>
            {{{ settingsLoginLabel }}}
            {{{ settingsLoginInput }}}
            <hr>
            {{{ settingsNameLabel }}}
            {{{ settingsNameInput }}}
            <hr>
            {{{ settingsSecondNameLabel }}}
            {{{ settingsSecondNameInput }}}
            <hr>
            {{{ settingsEmailLabel }}}
            {{{ settingsEmailInput }}}
            <hr>
            {{{ settingsPhoneLabel }}}
            {{{ settingsPhoneInput }}}
            <hr>
            {{{ settingsDataLink }}}
            {{{ settingsPasswordLink }}}
            {{{ settingsExitLink }}}
            {{{ buttonBlueBack }}}    
        </form>
        <div class="settings-window">
            {{{ settingsPlug }}}
            {{{ changeDataForm }}}
            {{{ changePasswordForm }}}
        </div>
    </div>
`;

