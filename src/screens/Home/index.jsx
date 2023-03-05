import React, { useState } from 'react';
import { Advantages, Hero, Testimonials, Modal, Plans, Info, Form } from '../../components';
import { ImagePromotion } from '../../components/Promotion/ImagePromotion';

function Home() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <main>
      <Modal open={openModal} setOpen={setOpenModal}>
        <ImagePromotion handlerClose={() => setOpenModal(false)} />
      </Modal>
      <Hero handlerOpenModal={setOpenModal} />
      <div className='mt-4 md:mt-12'>
        <Info />
      </div>

      <Plans />
      <Testimonials />
      <Advantages />
      <Form />
    </main>
  );
}

export default Home;
