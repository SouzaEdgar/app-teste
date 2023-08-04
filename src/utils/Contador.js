import React, { useState } from 'react';

 

export function Increase() {
    const [cont, setCont]=useState(0);

    if (cont >= 360) return setCont(0)
    else return setCont(cont + 90)
}
