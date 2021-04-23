import React from 'react';

export default function ReveiwForm() {
  return (
    <>
      <h3>Write Your Review</h3>
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </>
  );
};