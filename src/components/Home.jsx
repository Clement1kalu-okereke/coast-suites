function Home() {
  return (
    <>
      <section className="reserve">
        <form action="">
          <fieldset>
            <legend>Your Stay Dates</legend>
            <input type="date" id="arrivalDate" name="arrivalDate" />
            <input type="date" id="depatureDate" name="depatureDate" />
          </fieldset>
          <label htmlFor="roomsAndGuest">Rooms and Guests</label>
        </form>
      </section>
    </>
  );
}

export default Home;
