# Summary

useMemeMutation fails with error

## Expected Behavior

Methods wraps useMutate, when called with uid and memeId it modifies uid meme collection with the appropriate meme id, When called with only the uid it creates a new meme in the uid meme collection

## Actual Behavior

When called with just uid or with uid and memeId it throws the following error:

- Uncaught Error: (0 , \_ui_shared_firebase_utils**WEBPACK_IMPORTED_MODULE_2**.useMemeMutation) is not a function

## Last Time It Worked

Never but a similar method called useProfileMutation does work

## Possible Causes

## Possible Solutions

## Eliminated Causes

## Eliminated Solutions

## New Insights

## Solved
