import React from 'react'
import { SyncOutlined } from '@ant-design/icons';

interface IAuthStyled {
  handleSubmit: (e: any) => Promise<void>;
  setEmail: (param: string) => void;
  setPassword: (param: string) => void;
  name: string;
  setName: (param: string) => void;
  email: string;
  page: string;
  password: string;
  loading: boolean;
}

function AuthForm({
  handleSubmit,
  name,
  setName,
  email,
  setEmail,
  password,
  setPassword,
  loading,
  page
}: IAuthStyled) {
  return (
    <form onSubmit={handleSubmit}>
      {page === 'register' && (
        <div className='form-group p-2'>
          <small>
            <label className='text-muted'>Name</label>
          </small>
          <input
            value={name}
            onChange={e => setName(e.target.value)}
            type='text'
            className='form-control'
            placeholder='Enter your name'
          />
        </div>
      )}

      <div className='form-group p-2'>
        <small>
          <label className='text-muted'>Email</label>
        </small>
        <input
          value={email}
          onChange={e => setEmail(e.target.value)}
          type='text'
          className='form-control'
          placeholder='Enter your Email'
        />
      </div>

      <div className='form-group p-2'>
        <small>
          <label className='text-muted'>Password</label>
        </small>
        <input
          value={password}
          onChange={e => setPassword(e.target.value)}
          type='password'
          className='form-control'
          placeholder='Enter your Password'
        />
      </div>

      <div className='p-2'>
        <button
          disabled={
            page === 'login'
              ? !email || !password
              : !name || !email || !password
          }
          className='btn btn-primary col-12'
        >
          {loading ? <SyncOutlined spin className="py-1" /> : 'Submit'}
        </button>
      </div>
    </form>
  )
}

export default AuthForm