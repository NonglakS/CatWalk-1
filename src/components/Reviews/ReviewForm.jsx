import React from 'react';

export default function ReveiwForm({ name }) {
  const handleSubmit = () => {
    console.log('submitted');
  };

  return (
    <>
      <h5>Write Your Review</h5>
      <h6>
        About the
        {name}
      </h6>
      <form>
        <div className="form-row">
          <label className="form-label">
            Do you recommend this product?*
          </label>
          <div className="radio">
            <input type="radio" name="recommend" id="yes" value="yes" />
            <label htmlFor="yes" className="form-label">Yes</label>
            <input type="radio" name="recommend" id="no" value="no" />
            <label htmlFor="no" className="form-label">No</label>
          </div>
        </div>

        <div className="form-row">
          <label className="form-label">
            Review summary*:
          </label>
          <textarea id="summary" placeholder="Example: Best purchase ever!" maxLength={60} required style={{ width: '75%', height: '30px' }} />
        </div>

        <div className="form-row">
          <label className="form-label">
            Review body*:
          </label>
          <textarea id="summary" placeholder="Example: Best purchase ever!" maxLength={1000} required style={{ width: '75%' }} />
        </div>

        <div className="form-row">
          <label className="form-label">
            Nickname*:
          </label>
          <input type="text" name="nickname" id="nickname" maxLength={60} placeholder="Example: Jackson11" style={{ width: '75%', marginBottom: '5px' }} />
          <div className="disclaimer">For privacy reasons, do not use your full name or email address</div>
        </div>

        <div className="form-row">
          <label className="form-label">
            email*:
          </label>
          <input type="text" name="email" id="email" maxLength={60} placeholder="Example: Jackson11@gmail.com" style={{ width: '75%', marginBottom: '5px' }} />
          <div className="disclaimer">For authentication reasons, you will not be emailed</div>
        </div>

        <input type="submit" value="Submit" onSubmit={handleSubmit} />
      </form>
    </>
  );
}
