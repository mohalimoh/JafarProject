// import external modules
import React, { Component, Suspense, lazy } from "react";
import { BrowserRouter, Switch, Redirect } from "react-router-dom";
import Spinner from "../components/spinner/spinner";
import { connect } from "react-redux";
// import internal(own) modules
import MainLayoutRoutes from "../layouts/routes/mainRoutes";
import LoginLayoutRoute from "../layouts/routes/loginRoutes"
import ErrorLayoutRoute from "../layouts/routes/errorRoutes";
import LogoutLayoutRoute from "../layouts/routes/logoutRoutes";
import urls from '../urls.json';
 const LazyVesselsPage = lazy(() => import("../views/pages/basic-info/vesselsPage"));
const LazyShippingLinesPage = lazy(() => import("../views/pages/basic-info/shippingLinesPage"));
const LazyVoyagesPage = lazy(() => import("../views/pages/basic-info/voyagesPage"));
// const LazyLoadOperationsPage = lazy(() => import("../views/pages/loadOperationPage"));
const LazyLoginPage = lazy(() => import("../views/pages/loginPage"));
// const LazyDamagePage = lazy(() => import("../views/pages/damagePage"));
// const LazyLoadUnloadPage = lazy(() => import("../views/pages/statistics/loadUnloadStatisticsPage"));
// const LazyStowagePage = lazy(() => import("../views/pages/stowagePage"));
const LazyUsersPage = lazy(() => import("../views/pages/usersPage"));
const LazyLogout = lazy(() => import("../views/pages/logoutPage"));
const LazyMaintainance = lazy(() => import("../views/pages/maintainance"));

// Full Layout
const LazyHome = lazy(() => import("../views/dashboard/ecommerceDashboard"));

// Error Pages
const LazyErrorPage = lazy(() => import("../views/pages/error"));

class Router extends Component {
  state = {};
  // componentWillMount() {
  //   const user = auth.getCurrentUser();

  //   this.setState({ user });
  // }
  render() {
    //console.log('from render')
    return (
      // Set the directory path if you are deplying in sub-folder
      <BrowserRouter basename="/">
        <Switch>
          <MainLayoutRoutes
            exact
            path={urls.Home}
            render={(matchprops) => (
              <Suspense fallback={<Spinner />}>
                <LazyHome {...matchprops} />
              </Suspense>)}
          />
          <MainLayoutRoutes
            exact
            path={urls.Users}
            render={(matchprops) => (
              <Suspense fallback={<Spinner />}>
                <LazyUsersPage {...matchprops} />
              </Suspense>
            )}
          />
          <MainLayoutRoutes
            exact
            path={urls.Dashboard}
            render={(matchprops) => (
              <Suspense fallback={<Spinner />}>
                <LazyMaintainance {...matchprops} />
              </Suspense>
            )}
          />
          <LoginLayoutRoute
            exact
            path={urls.Login}
            render={(matchprops) => (
              <Suspense fallback={<Spinner />}>
                <LazyLoginPage {...matchprops} />
              </Suspense>
            )}
          />
          <MainLayoutRoutes
            exact
            path={urls.Vessels}
            render={(matchprops) => (
              <Suspense fallback={<Spinner />}>
                <LazyVesselsPage {...matchprops} />
              </Suspense>
            )}
          />
           <MainLayoutRoutes
            exact
            path={urls.ShippingLines}
            render={(matchprops) => (
              <Suspense fallback={<Spinner />}>
                <LazyShippingLinesPage {...matchprops} />
              </Suspense>
            )}
          />
          <MainLayoutRoutes
            exact
            path={urls.Voyages}
            render={(matchprops) => (
              <Suspense fallback={<Spinner />}>
                <LazyVoyagesPage {...matchprops} />
              </Suspense>
            )}
          />
          {/* <MainLayoutRoutes
            exact
            path={urls.Discharge}
            render={(matchprops) => (
              <Suspense fallback={<Spinner />}>
                <LazyUnloadOperationPage {...matchprops} />
              </Suspense>
            )}
          />
          <MainLayoutRoutes
            exact
            path={urls.LoadStatistics}
            render={(matchprops) => (
              <Suspense fallback={<Spinner />}>
                <LazyLoadUnloadPage {...matchprops} />
              </Suspense>
            )}
          />
          <MainLayoutRoutes
            exact
            path={urls.LoadDamage}
            render={(matchprops) => (
              <Suspense fallback={<Spinner />}>
                <LazyDamagePage {...matchprops} />
              </Suspense>
            )}
          />
          <MainLayoutRoutes
            exact
            path={urls.Load}
            render={(matchprops) => (
              <Suspense fallback={<Spinner />}>
                <LazyLoadOperationsPage {...matchprops} />
              </Suspense>
            )}
          />
          <MainLayoutRoutes
            exact
            path={urls.Stowage}
            render={(matchprops) => (
              <Suspense fallback={<Spinner />}>
                <LazyStowagePage {...matchprops} />
              </Suspense>
            )}
          /> */}
          {/* <MainLayoutRoutes
            exact
            path={urls.Vessel}
            render={(matchprops) => (
              <Suspense fallback={<Spinner />}>
                <LazyOperationsPage {...matchprops} operations="Vessel" />
              </Suspense>
            )}
          />
          <MainLayoutRoutes
            exact
            path={urls.CY}
            render={(matchprops) => (
              <Suspense fallback={<Spinner />}>
                <LazyOperationsPage {...matchprops} operations="CY" />
              </Suspense>
            )}
          />
          <MainLayoutRoutes
            exact
            path={urls.OperationType}
            render={(matchprops) => (
              <Suspense fallback={<Spinner />}>
                <LazyOperationTypePage {...matchprops} />
              </Suspense>
            )}
          /> */}
          <LogoutLayoutRoute
            exact
            path={urls.Logout}
            render={(matchprops) => (
              <Suspense fallback={<Spinner />}>
                <LazyLogout {...matchprops} />
              </Suspense>
            )}
          />
          <ErrorLayoutRoute
            render={(matchprops) => (
              <Suspense fallback={<Spinner />}>
                <LazyErrorPage {...matchprops} />
              </Suspense>
            )}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    // fetch: () => dispatch(fetchVoyagesTopTenOpen()),
    // fetchOperator:(value)=>dispatch(fetchOperatorInfoBasedOnCode(value))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Router);
