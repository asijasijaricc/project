const MapComponent = () => {
  const wrapperStyle = {
    width: "990px",
    borderRadius: "10px",
    overflow: "hidden",
  };
  return (
    <div style={wrapperStyle}>
      <iframe
        title="Google Map"
        width="100%"
        height="400"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
        borderRadius="90px"
        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Novi%20Pazar%20Avnoj%20BB+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default MapComponent;
