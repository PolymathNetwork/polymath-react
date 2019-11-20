export default function User(_ref) {
  var walletAddress = _ref.walletAddress;

  if (walletAddress) return React.createElement(
    Fragment,
    null,
    React.createElement(Icon, { type: "user", style: {
        marginRight: 5,
        marginLeft: 10
      } }),
    React.createElement(
      Text,
      null,
      walletAddress
    )
  );
  return null;
}