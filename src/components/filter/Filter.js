import React from "react";
import PropTypes from "prop-types";
import { FilterStyled } from "./FilterStyled";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../redux/contacts/contactActions";
import { getFilter } from "../../redux/contacts/contactSelectors";

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  const onChange = (e) => {
    dispatch(setFilter(e.target.value));
  };
  return (
    <FilterStyled>
      <label className="labelFilter">
        Find contacts by name:
        <input className="inputFilter" type="text" name="filter" value={filter} onChange={onChange} />
      </label>
    </FilterStyled>
  );
};

// const mapStateToProps = (state) => ({
//   filter: state.filter,
// });

// const mapDispatchToProps = (dispatch) => ({
//   handleInputChange: (e) => dispatch(setFilter(e.target.value)),
// });

// const mapDispatchToProps = {
//   setFilter,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Filter);

Filter.propTypes = {
  filter: PropTypes.string,
  setFilter: PropTypes.func.isRequired,
};

export default Filter;
