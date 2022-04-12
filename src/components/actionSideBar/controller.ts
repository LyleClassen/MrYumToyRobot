import { RobotContent, useRobotData } from 'providers/RobotProvider';
import { useRef, useState } from 'react';
import { object, string } from 'yup';
import { FixedSizeList } from 'react-window';

interface FormValues {
  input: string;
}

const useActionSideBar = () => {
  const { place, move, left, right, report }: RobotContent = useRobotData();
  const [reportList, setReportList] = useState([]);
  const outputRef = useRef(null);
  const inputRef = useRef<HTMLElement>(null);

  const initialValues = {
    input: '',
  };

  const onSubmit = (
    values: FormValues,
    { setSubmitting, resetForm }: { setSubmitting: (v: boolean) => void; resetForm: () => void },
  ) => {
    const { input } = values;
    const validInput = input.toUpperCase().split(' ');

    switch (validInput[0]) {
      case 'PLACE':
        const [xStr, yStr, facingStr] = validInput[1].split(',') as [string, string, string];
        place(Number(xStr), Number(yStr), facingStr);
        resetForm();
        break;
      case 'MOVE':
        move();
        break;
      case 'LEFT':
        left();
        break;
      case 'RIGHT':
        right();
        break;
      case 'REPORT':
        const reportValue: string = report();
        if (reportValue) {
          const fixedList = outputRef?.current as FixedSizeList;
          setReportList((list: Array<string>) => [...list, reportValue]);
          fixedList.scrollToItem(reportList.length);
        }
        break;
    }

    setSubmitting(false);
    inputRef.current.focus();
  };

  const validationSchema = object().shape({
    input: string()
      .uppercase()
      .matches(/(^PLACE \d,\d,(NORTH|EAST|SOUTH|WEST))$|^(MOVE|LEFT|RIGHT|REPORT)$/, 'Invalid Command'),
  });

  return {
    reportList,
    outputRef,
    inputRef,
    initialValues,
    validationSchema,
    onSubmit,
  };
};

export default useActionSideBar;
