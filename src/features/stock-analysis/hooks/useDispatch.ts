import { useDispatch as useReduxDispatch } from 'react-redux';
import type { AppDispatch } from '../../../stores/store'; 

export const useAppDispatch = () => useReduxDispatch<AppDispatch>();
