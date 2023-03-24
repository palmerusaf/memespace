# Summary

Auth login is broken on production.

## Expected Behavior

When user clicks on an auth provider they are redirected to an authentication screen. Afterwards they are redirected back to the application with the authentication.

## Actual Behavior

When user clicks on an auth provider they are redirected but then immediately redirected back without authentication. Auth provider screen never loads.

## Last Time It Worked

- Date: January 28, 2023
- Commit: b35b0da or 6614576 (Note: 661 was minor css change)

## Possible Causes

- Database deactivated because security
- Database deactivated because inactivity
- Exceeded limits for free tier
- Made a configuration change that breaks auth loading
- Made a codebase change that breaks auth loading
- Safelist client id not set correctly

## Possible Solutions

- Add app check
- Revert breaking configuration changes
- Revert breaking codebase changes
- Create new project to get new keys

## Eliminated Causes

- Updated rules prevent auth loading
- Project is hosted on vercel
  - REASON: Doesn't work with localhost either
- Facebook Login Provider is causing problem
  - REASON: Doesn't work with Google Login Provider either
- Api keys changed
  - REASON: API keys still correct
- Using env.local is messing things up
  - REASON: Inlining vars breaks too

## Eliminated Solutions

- Create new app id with old keys
- Revert rules back to what they were before

## New Insights

After creating new project we get to google login provider screen but on redirection to app user is null.

- Should double check user is actually null and i'm not logging auth state before it has a chance to resolve.
- Try switching to old project and remove and reading auth provider
- useLoggedIn could be causing the problem

## Solved

Works on chrome, likely is an issue with firefox access to session storage, maybe related to [this](https://github.com/firebase/firebase-js-sdk/issues/6443), also had to clear browser data, maybe session data got corrupted.
