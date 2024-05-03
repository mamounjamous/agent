import React from 'react';
import { DateTimePickerComponent } from '@syncfusion/ej2-react-calendars';
import './TimePicker.scss';
import { t } from 'i18next';
import PropTypes from 'prop-types';

class TimePicker extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      Date: new Date(),
    };
    this.maxDate = new Date();
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    if (event.value !== null) {
      this.setState({
        Date: event.value,
      });

      const { callBack } = this.props;
      const { Date } = this.state;

      if (callBack) {
        const filter = {
          timestamp_offset_start: 0,
          timestamp_offset_end: Math.floor(Date.getTime() / 1000),
          number_of_elements: 12,
          isScrolling: false,
          open: false,
          currentRecording: '',
          reset: true,
        };
        callBack(filter);
      }
    }
    return true;
  }

  render() {
    const { Date } = this.state;
    return (
      <DateTimePickerComponent
        placeholder={t('timepicker.placeholder')}
        id="datetimepicker"
        strictMode="true"
        max={this.maxDate}
        onChange={this.handleChange}
        value={Date}
      />
    );
  }
}

TimePicker.propTypes = {
  callBack: PropTypes.func.isRequired,
};
export default TimePicker;
