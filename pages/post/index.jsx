import React, { useState } from 'react';

export default function Post() {
  const [name, setName] = useState();
  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
}
