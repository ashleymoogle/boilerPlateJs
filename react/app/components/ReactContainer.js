import React from 'react'
import {observer} from 'mobx-react'

import {I18nextProvider} from 'react-i18next'
import i18n from '../i18n'

import { BrowserRouter, Route, Switch } from 'react-router-dom'

import AppContainer from './app/AppContainer'

@observer
class ReactContainer extends React.Component {

    render () {
        let {store} = this.props

        return (
            <I18nextProvider i18n={i18n}>
                <BrowserRouter history={store.history}>
                    <Switch>
                        <Route path="/test" component={(props) => <div>TEST</div>}/>,
                        <Route path="/" component={(props) => <AppContainer store={store} />}/>,
                        <Route path="*" component={(e) => { console.log('unhandled route', e.routeParams.splat); return null }} />
                    </Switch>
                </BrowserRouter>
            </I18nextProvider>
        )
    }
}

export default ReactContainer
