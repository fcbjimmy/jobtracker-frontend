import { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';

export const useAuthContext = () => {
  const contextValue = useContext(AuthContext);
  const {
    state,
    dispatch,
    registerUser,
    loginUser,
    logoutUser,
    createJob,
    editSingleJob,
    deleteSingleJob,
    allJobs,
    editUserInfo,
    authFetch,
    setToggleModal,
    toggleModal,
    deleteJobId,
    setDeleteJobId,
  } = contextValue;
  if (!contextValue) {
    throw Error('useAuthContext must be used inside an AuthContextProvider');
  }
  return {
    ...state,
    dispatch,
    registerUser,
    loginUser,
    logoutUser,
    createJob,
    editSingleJob,
    deleteSingleJob,
    allJobs,
    editUserInfo,
    authFetch,
    setToggleModal,
    toggleModal,
    deleteJobId,
    setDeleteJobId,
  };
};
