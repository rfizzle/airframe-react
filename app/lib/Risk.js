export class Risk {

  static valueByName(name) {
    switch (name.toLowerCase()) {
      case 'critical':
        return 5;
      case 'high':
        return 4;
      case 'medium':
        return 3;
      case 'low':
        return 2;
      case 'info':
      case 'informational':
        return 1;
      default:
        return 0;
    }
  }

}

export default Risk;