/* https://tk-assets.lambdaschool.com/59036a85-0980-42c8-81ad-9afc8354497f_counter-clip.gif

STEP 1:
  Using the state hook, create a 'count', 'setCount' pair.
  The 'count' state should be initialized to the number zero.

STEP 2:
  The 'style' object has the 'color' property hard-coded to "royalblue".
  What the value of 'color' should be instead is a ternary expression that goes like this:
  If count is even, then "royalblue", else "crimson".

STEP 3:
  We need to replace some hard-coded info in the JSX with expressions, interpolated inside curly brackets.
  Start by replacing the character "0" with {count}. The 'count' slice of state is the source of truth here.
  Then, replace the word "even" with a ternary: {if count is even number, then string "even", else string "odd"}.

STEP 4:
  This click handler needs to use 'setCount' to schedule the 'count' to become the current 'count' plus one.
  These state changes are not synchronous: the updated count arrives on the next run of the Counter component.
  Do NOT simply do count++. The plus plus is forbidden! We never mutate a slice of state in place. Even if you could
  reassign a const, React would not be aware anything changed. Always use the state updater, passing in a new value.

STEP 5:
  This click handler needs to use 'setCount' to set the 'count' to be the current 'count' minus one.
  Do NOT do count--. That amounts to trying to mutate 'count' in place. This is the road to perdition.

STEP 6:
  This click handler needs to use 'setCount' to set the 'count' to be zero again.
*/

import React, {useState} from 'react'; /* STEP 0 */

export default function Counter() {
  /* STEP 1 */
  const [count, setCount] = useState(0);


  const increment = () => setCount(count + 1); /* STEP 4 */
  const decrement = () => setCount(count - 1); /* STEP 5 */
  const reset     = () => setCount(0);         /* STEP 6 */

  const style = {
    fontSize: '1.5em',
    marginBottom: '0.3em',
    color: count % 2 === 0 ? 'royalblue' : 'crimson' /* STEP 2 */
  };

  return (
    <div className='widget-counter container'>
      <h2>Counter</h2>
      <div id='count' style={style}>
        {/* STEP 3 */}
        Number {count} is {count % 2 === 0 ? 'even' : 'odd'} 
      </div>
      <div>
        <button id='increment' onClick={increment}>Increment</button>
        <button id='decrement' onClick={decrement}>Decrement</button>
        <button id='resetCount' onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
