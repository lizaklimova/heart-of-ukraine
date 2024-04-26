import { Suspense, lazy, useEffect, useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Toaster } from "react-hot-toast";
import { RestrictedRoute, PrivateRoute } from "routes";
import { getCurrentThunk } from "../../redux/auth/authOperations";
import { setToken } from "../../redux/auth/authSlice";
import Layout from "layouts/Layout";
import { selectIsRefreshing } from "../../redux/auth/authSelectors";
import MainLoader from "../Loaders/MainLoader";
import MyTasks from "../Profile/Tabs/MyTasks";
import Tab from "../Profile/Tabs/Tab";
import { useWindowWidth } from "hooks/useWindowWidth";

const HomePage = lazy(() => import("pages/HomePage.jsx"));
const AuthPage = lazy(() => import("pages/AuthPage.jsx"));
const VerificationPage = lazy(() => import("pages/VerificationPage.jsx"));
const SignInSuccessPage = lazy(() => import("pages/SignInSuccessPage.jsx"));
const ProfilePage = lazy(() => import("pages/ProfilePage.jsx"));
const ProfileSubPage = lazy(() => import("pages/ProfileSubPage.jsx"));
const WantToHelpPage = lazy(() => import("pages/WantToHelpPage.jsx"));
const NeedHelpPage = lazy(() => import("pages/NeedHelpPage.jsx"));
const CreateTasksPage = lazy(() => import("pages/CreateTaskPage.jsx"));
const FiltersPage = lazy(() => import("pages/FiltersPage.jsx"));
const NotFoundPage = lazy(() => import("pages/NotFoundPage.jsx"));
const ForgotPassPage = lazy(() => import("pages/ForgotPassPage.jsx"));
const RecoveryPassPage = lazy(() => import("pages/RecoveryPassPage.jsx"));
const PrivacyPolicyPage = lazy(() => import("pages/PrivacyPolicyPage.jsx"));
const TermsOfUsePage = lazy(() => import("pages/TermsOfUsePage.jsx"));
const PersonalInfoPage = lazy(() => import("pages/PersonalInfoPage.jsx"));
const ChangeInfoPage = lazy(() => import("pages/ChangeInfoPage.jsx"));
const ChangePasswordPage = lazy(() => import("pages/ChangePasswordPage.jsx"));
const NotificationsPage = lazy(() => import("pages/NotificationsPage.jsx"));
const SupportServicePage = lazy(() => import("pages/SupportServicePage.jsx"));

const App = () => {
  const [redirectTo] = useState(() => localStorage.getItem("location") ?? "/");

  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  const windowWidth = useWindowWidth();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const accessToken = urlParams.get("token");

    if (accessToken) {
      dispatch(setToken(accessToken));
    }

    dispatch(getCurrentThunk());
  }, [dispatch]);

  return isRefreshing ? (
    <MainLoader />
  ) : (
    <Suspense fallback={<MainLoader />}>
      <Toaster position="top-right" reverseOrder={false} />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/wantToHelp"
            element={
              <PrivateRoute
                component={<WantToHelpPage />}
                redirectTo={"/auth/login"}
              />
            }
          />
          <Route
            path="/needHelp"
            element={
              <PrivateRoute
                component={<NeedHelpPage />}
                redirectTo={"/auth/login"}
              />
            }
          />
          <Route
            path="/createTask"
            element={
              <PrivateRoute
                component={<CreateTasksPage />}
                redirectTo={"/auth/login"}
              />
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Route>

        <Route
          path="/profile/requests"
          element={
            <PrivateRoute
              component={<Navigate to={"/profile/requests/need"} />}
              redirectTo={"/auth/login"}
            />
          }
        />

        <Route
          path="/profile/responses"
          element={
            <PrivateRoute
              component={<Navigate to={"/profile/responses/need"} />}
              redirectTo={"/auth/login"}
            />
          }
        />

        {windowWidth >= 1440 ? (
          <Route
            path="/profile"
            element={
              <PrivateRoute
                component={<ProfilePage />}
                redirectTo={"/auth/login"}
              />
            }
          >
            <Route
              path=":id"
              element={
                <PrivateRoute
                  component={<ProfileSubPage />}
                  redirectTo={"/auth/login"}
                />
              }
            >
              <Route
                path=":reqId"
                element={
                  <PrivateRoute
                    component={<Tab />}
                    redirectTo={"/auth/login"}
                  />
                }
              />
            </Route>
          </Route>
        ) : (
          <>
            <Route
              path="/profile"
              element={
                <PrivateRoute
                  component={<ProfilePage />}
                  redirectTo={"/auth/login"}
                />
              }
            />
            <Route
              path="/profile/personal"
              element={
                <PrivateRoute
                  component={<PersonalInfoPage />}
                  redirectTo={"/auth/login"}
                />
              }
            />
            <Route
              path="/profile/change"
              element={
                <PrivateRoute
                  component={<ChangeInfoPage />}
                  redirectTo={"/auth/login"}
                />
              }
            />
            <Route
              path="/profile/changePassword"
              element={
                <PrivateRoute
                  component={<ChangePasswordPage />}
                  redirectTo={"/auth/login"}
                />
              }
            />
            <Route
              path="/profile/requests"
              element={
                <PrivateRoute
                  component={<MyTasks />}
                  redirectTo={"/auth/login"}
                />
              }
            >
              <Route
                path=":reqId"
                element={
                  <PrivateRoute
                    component={<Tab />}
                    redirectTo={"/auth/login"}
                  />
                }
              />
            </Route>
            <Route
              path="/profile/responses"
              element={
                <PrivateRoute
                  component={<MyTasks />}
                  redirectTo={"/auth/login"}
                />
              }
            >
              <Route
                path=":reqId"
                element={
                  <PrivateRoute
                    component={<Tab />}
                    redirectTo={"/auth/login"}
                  />
                }
              />
            </Route>
            <Route
              path="/profile/notifications"
              element={
                <PrivateRoute
                  component={<NotificationsPage />}
                  redirectTo={"/auth/login"}
                />
              }
            />
            <Route
              path="/profile/support"
              element={
                <PrivateRoute
                  component={<SupportServicePage />}
                  redirectTo={"/auth/login"}
                />
              }
            />
          </>
        )}
        <Route
          path="/wantToHelp/filters"
          element={
            <PrivateRoute
              component={<FiltersPage />}
              redirectTo={"/auth/login"}
            />
          }
        />
        <Route
          path="/needHelp/filters"
          element={
            <PrivateRoute
              component={<FiltersPage />}
              redirectTo={"/auth/login"}
            />
          }
        />
        <Route
          path="/auth/:authId"
          element={
            <RestrictedRoute component={<AuthPage />} redirectTo={redirectTo} />
          }
        />
        <Route
          path="/auth/verification"
          element={
            <RestrictedRoute
              component={<VerificationPage />}
              redirectTo={"/"}
            />
          }
        />
        <Route
          path="/auth/signinsuccess"
          element={
            <RestrictedRoute
              component={<SignInSuccessPage />}
              redirectTo={"/"}
            />
          }
        />
        <Route path="/auth/forgotpass" element={<ForgotPassPage />} />
        <Route path="/auth/recoverypass" element={<RecoveryPassPage />} />

        <Route path="/privacyPolicy" element={<PrivacyPolicyPage />} />
        <Route path="/termsOfUse" element={<TermsOfUsePage />} />
      </Routes>
    </Suspense>
  );
};

export default App;
