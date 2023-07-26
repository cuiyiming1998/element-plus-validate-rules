export default {
  mobile: /^(?:0|86|\+86)?1[3-9]\d{9}$/,
  tel: /(010|02\d|0[3-9]\d{2})-?(\d{6,8})/,
  password: /^\S*(?=\S{8,})(?=\S*\d)(?=\S*[a-zA-Z])(?=\S*[!@#$%^&*?.])\S*$/,
  numberString: /^\d{1,}$/,
  decimal: /^\d+(\.\d{1,2})?$/,
}
