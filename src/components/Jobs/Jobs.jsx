import { useState } from 'react';
import { useAuthContext } from '../../hooks/useAuthContext';
import style from './Jobs.module.scss';
import { FcCalendar } from 'react-icons/fc';
import { useNavigate } from 'react-router-dom';
import { Container } from '../index';

const Jobs = () => {
  const { jobs, deleteSingleJob } = useAuthContext();
  let navigate = useNavigate();
  const [filteredValue, setFilteredValue] = useState('');
  return (
    <Container title={'Jobs'} filter={true} setFilteredValue={setFilteredValue}>
      <div className={style.grid}>
        {jobs
          ?.sort(function (a, b) {
            return new Date(a.date) - new Date(b.date);
          })
          .filter((job) => {
            if (job.status === filteredValue) {
              return job;
            } else if (filteredValue === '') {
              return job;
            }
          })
          .map((job, index) => {
            const { _id: jobId } = job;
            return (
              <div className={style.container} key={index}>
                <div className={style.content}>
                  <p className={style.job}>
                    {job.position} at {job.company}
                  </p>
                  <div className={style[`${job.status}`]}>{job.status}</div>
                  <div className={style.date}>
                    <i>
                      <FcCalendar />
                    </i>
                    <span>{job.date.split('T')[0]}</span>
                  </div>
                </div>
                <div className={style.bottom}>
                  <span className={style.edit} onClick={() => navigate(`/editjob/${index}`)}>
                    Edit
                  </span>{' '}
                  <span className={style.delete} onClick={() => deleteSingleJob({ jobId })}>
                    Delete
                  </span>
                </div>
              </div>
            );
          })}
      </div>
      {jobs?.length === 0 && <div className={style.empty}>No Jobs</div>}
    </Container>
  );
};

export default Jobs;
