import { useState } from 'react';
import { Calendar as LibraryCalendar } from 'react-calendar';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];
// export default function Calendar () {

// }
const Calendar = () => {
    const [value, onChange] = useState<Value>(new Date());
    <div>
    </div>
  };