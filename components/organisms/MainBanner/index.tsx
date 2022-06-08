import Illustration from './Illustration';

export default function MainBanner() {
  return (
    <section className="header pt-lg-60 pb-50">
      <div className="container-xxl container-fluid">
        <div className="row gap-lg-0 gap-5">
          <div className="col-lg-6 col-12 my-auto">
            <p className="text-support text-lg color-palette-2">
              Halo Semua
            </p>
            <h1 className="header-title color-palette-1 fw-bold">
              Selamat Datang
              {' '}
              <span
                className="underline-blue"
              >
                di
              </span>
              {' '}
              Company Profile Jainal Arifin
            </h1>
            <p className="mt-30 mb-40 text-lg color-palette-1">
              Saya adalah front end developer
              berpengalaman yang telah lebih dari
              3 tahun 9 bulan bekerja di industri IT.
              <br
                className="d-md-block d-none"
              />
              {' '}
              
              Fokus kerja saya adalah front end
              web dan mobile.
            </p>
            <div className="d-flex flex-lg-row flex-column gap-4">
              <a className="btn btn-get text-lg text-white rounded-pill" href="#feature" role="button">
                Technology
              </a>
              <a className="btn-learn text-lg color-palette-1 my-auto text-center" href="#" role="button">
                Learn
                More
              </a>
            </div>
          </div>
          <Illustration />
        </div>
      </div>
    </section>
  );
}
