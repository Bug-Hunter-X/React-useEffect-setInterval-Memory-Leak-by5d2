# React useEffect setInterval Memory Leak

This repository demonstrates a common error in React applications involving the use of `setInterval` within the `useEffect` hook.  Improperly handling `setInterval` can lead to memory leaks and unexpected behavior.  The `bug.js` file showcases this error, while `bugSolution.js` provides the corrected implementation.

## Problem

The `setInterval` function, when used without proper cleanup, creates a timer that continues running even after the component unmounts. This results in multiple timers being scheduled, and eventually leading to memory leaks and performance degradation.

## Solution

The solution involves using the return function of the `useEffect` hook to clear the interval when the component unmounts or when the dependency changes.  This ensures that the timer is stopped correctly and prevents memory leaks.