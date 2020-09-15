import React, { Fragment, useState, useEffect } from "react";
import { Card, CardBody, Button, FormGroup, Form, Row, Col, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { Table, Tag, Space, Checkbox, Switch, Radio } from 'antd';
import { Formik } from "formik";
import { ShoppingBag, Edit2 } from "react-feather";
import * as Yup from "yup";
import { toast } from "react-toastify";
import _ from "lodash";
import urls from '../../../urls.json'

import CustomNavigation from "../../../components/common/customNavigation";
import FormikControl from "../../../components/common/formik/FormikControl";
import antdClass from 'antd/dist/antd.css';
import antdClass2 from "../../../assets/css/vendors/customAntdTable.css"

import {
    getVessels,
    deleteVessel,
    editVessel,
    getVesselTypes
} from "../../../services/vesselService";

import { getCountries } from "../../../services/countryService"

toast.configure({ bodyClassName: "customFont" });

//#region INITIAL VALUES ---------------------------------------------------

const initialValues = {
    selectVesselType: "",
    selectCallSign: "",
    selectNationality: "",
    vesselName: "",
    shipLength: "",
    numOfBays: "",
    activeCraneQty: "",
    grossTonage: "",
    flag: ""
};

const validationSchema = Yup.object({
    selectVesselType: Yup.string().required("Entet Vessel Type!"),
    selectCallSign: Yup.string().required("Enter Call Sign!"),
    selectNationality: Yup.string().required("Enter Nationality!"),
    vesselName: Yup.string().required("Enter Vessel Name!"),
    shipLength: Yup.string().required("Enter Vessel Length!"),
    numOfBays: Yup.string().required("Enter Number Of Bay!"),
    activeCraneQty: Yup.string().required("Enter Active Crane Qty!"),
    grossTonage: Yup.string().required("Enter Vessel Gross Tonage!"),
    flag: Yup.string().required("Enter Flag Of Vessel!"),
});


//#endregion ---------------------------------------------------------------

//#region SUBMIT FORMIK ----------------------------------------------------

const onSubmitEditVessel = (values, props, staffId) => {
    //console.log("Form Submit Data", values);
    let parameters = {
        cntrNo: values.containerNo,
        voyageId: values.selectVoyageNo.value,
    };

    //   getCntrInfoForUnload(parameters).then((response) => {
    //     //console.log("response", response);
    //     let { data, result } = response.data;
    //     if (result) {
    //       //---------------- Duplicate Act Check---------------------------------
    //       if (data[0].ActID != null) {
    //         return toast.error("اطلاعات این کانتینر قبلاً ثبت شده");
    //       } else {
    //         let parametersForUnload = {
    //           cntrNo: data[0].BayCntrNo,
    //           voyageId: data[0].VoyageID,
    //           berthId: data[0].BerthID,
    //           userId: 220,
    //           equipmentId: values.selectEquipmentType.value,
    //           operatorId: staffId,
    //           truckNo: values.truckNo,
    //           isShifting: data[0].ShiftingID !== null ? 1 : 0,
    //           sE: se ? 1 : 0,
    //           oG: og ? 1 : 0,
    //         };
    //         if (data[0].ManifestCntrID != null || data[0].ShiftingID !== null) {
    //           if (data[0].ShiftingID != null) {
    //             let paramData = {
    //               voyageId: parametersForUnload.voyageId,
    //               cntrNo: parametersForUnload.cntrNo,
    //             };
    //             isExistCntrInInstructionLoading(paramData)
    //               .then((res) => {
    //                 if (!res.data.result) {
    //                   addToLoadingList(paramData)
    //                     .then((res) => {
    //                       // console.log(
    //                       //   "res save addToLoadingList",
    //                       //   res.data.data[0]
    //                       // );
    //                       if (res.data.result) toast.success(res.data.data[0]);
    //                       else return toast.error(res.data.data[0]);
    //                     })
    //                     .catch((error) => {
    //                       //return toast.error(error);
    //                     });
    //                 }
    //               })
    //               .catch((error) => {
    //                 //return toast.error(error);
    //               });
    //           }
    //           if (data[0].ManifestCntrID != null && data[0].TerminalID == null) {
    //             return toast.error("ترمینال تخلیه پلن نشده");
    //           } else {
    //             saveUnload(parametersForUnload)
    //               .then((res) => {
    //                 //console.log("res save unload", res, res.data.data[0]);
    //                 if (res.data.result) {
    //                   toast.success(res.data.data[0]['message']);
    //                   return props.history.push(urls.DischargeDamage, { actId: res.data.data[0]['ActId'], cntrNo: values.containerNo });
    //                 } else return toast.error(res.data.data[0]);
    //               })
    //               .catch((error) => {
    //                 //return toast.error(error);
    //               });
    //           }
    //         } else if (data[0].PortOfDischarge === "IRBND") {
    //           saveUnloadIncrement({ ...parametersForUnload, terminalId: 39 })
    //             .then((res) => {
    //               //console.log("res save unload INCREAMENT", res);
    //               if (res.data.result) {
    //                 toast.success(res.data.data[0]['message']);
    //                 return props.history.push(urls.DischargeDamage, { actId: res.data.data[0]['ActId'], cntrNo: values.containerNo });
    //               } else return toast.error(res.data.data[0]);
    //             })
    //             .catch((error) => {
    //               //return toast.error(error);
    //             });
    //         }
    //       }
    //     } else {
    //       return toast.error("کانتینر یافت نشد");
    //     }
    //   });
};

//#endregion ---------------------------------------------------------------

const VesselsPage = (props) => {

    const columns = [
        {
            title: 'Name',
            dataIndex: 'vesselName',
            key: 'vesselName',
            sorter: {
                compare: (a, b) => a.vesselName.localeCompare(b.vesselName),
                multiple: 4
            },
            sortDirections: ['ascend', 'descend'],
            defaultSortOrder: 'ascend',
        },
        {
            title: 'Type',
            dataIndex: 'vesselTypeName',
            key: 'vesselTypeName'
        },
        {
            title: 'Gross Tonage',
            dataIndex: 'grossTonage',
            key: 'grossTonage'
        },
        {
            title: 'Flag',
            dataIndex: 'flag',
            key: 'flag',
            render: flag => (
                <Tag color={flag === "Iran" ? "blue" : "volcano"}>{
                    flag
                }</Tag>
            )
        },
        {
            title: 'Nationality',
            dataIndex: 'nationality',
            key: 'nationality'
        },
        {
            title: 'Length',
            dataIndex: 'vesselLength',
            key: 'vesselLength'
        },
        {
            title: 'Number Of Bays',
            dataIndex: 'numberOfBays',
            key: 'numberOfBays'
        },
        {
            title: 'Active Crane Qty',
            dataIndex: 'activeCraneQty',
            key: 'activeCraneQty'
        },
        {
            title: 'Call Sign',
            dataIndex: 'callSign',
            key: 'callSign'
        },
        {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <Space size="middle">
                    <Button className="btn-warning mt-1" size="sm" onClick={() => handleEditVessel(record)}>
                        <Edit2 size={16} />
                    </Button>
                </Space>
            ),
        }
    ];

    //#region SELECTORS AND STATE --------------------------------------------

    const [state, setState] = useState({
        //ListOfUserTypes: [],

        ListOfFlags: [],
        ListOfNationalities: [],
        ListOfVesselTypes: [],
        ListOfVessels: [],
        editModal: false,
        createModal: false,
        currentRow: {}
    });

    //#endregion -------------------------------------------------------------

    //#region INITIAL FUNCTIONS ----------------------------------------------

    useEffect(() => {
        getVessels().then(res => {
            if (res.data.result) {
                console.log('vessels', res);
                const tempList = res.data.data.map(item => {
                    return {
                        key: item.VesselId,
                        vesselId: item.VesselId,
                        vesselName: item.VesselName,
                        vesselTypeName: item.VesselType,
                        grossTonage: item.GrossTonage,
                        flag: item.FlagName,
                        nationality: item.NationalityName,
                        vesselLength: item.VesselLength,
                        numberOfBays: item.NumOfBays,
                        activeCraneQty: item.ActiveCraneQty,
                        callSign: item.CallSign
                    }
                })
                setState({ ListOfVessels: tempList })
            }
        }).catch(err => { });
        // getVesselTypes().then(res => {
        //     if (res.data.result) {
        //         setState({ ListOfVesselTypes: res.data.data });
        //     }
        // }).catch(err=>{});
        getCountries().then(res => {
            if (res.data.result) {
                console.log('country', res)
                //setState({ ...state,ListOfNationalities: res.data.data, ListOfFlags: res.data.data });
                setState(prevState => ({ ...prevState, ListOfNationalities: res.data.data, ListOfFlags: res.data.data }))
            }
        }).catch(err => { });
    }, []);

    //#endregion -------------------------------------------------------------

    //#region EVENT HANDLRES -------------------------------------------------

    const handleEditVessel = (vesselData) => {
        //   console.log('userData for edit', userData);
        const Vessel = { ..._(state.ListOfVessels).filter(c => c.vesselId === vesselData.vesselId).first() };
        // userInfo.userCode = 123456;
        // const permissions = [..._(this.state.ListOfUsers).filter(c => c._id == userData._id).first().permissions];
        // permissions[0] = { ...permissions[0] };
        // permissions[0].name = "XXXX";
        // userInfo.permissions = permissions;
        setState({ currentRow: Vessel })
        editToggle();
    }

    const editToggle = () => {
        setState({
            editModal: !state.editModal
        });
    }

    const handleCancelEditVessel = () => {
        setState({ currentRow: {} });
        editToggle();
    }

    const handleCreateVessel = () => {

        setState({ currentRow: {} })
        createToggle();
    }

    const createToggle = () => {
        setState({
            createModal: !state.createModal
        });
    }

    const handleCancelCreateVessel = () => {
        setState({ currentRow: {} });
        createToggle();
    }

    //#endregion -------------------------------------------------------------

    console.log('state', state)
    return (
        <React.Fragment>
            {/* <h4 className="mt-4 mb-0 text-bold-400">Users</h4>
            <p>
                Constrain the width of cards via custom CSS, our predefined grid classes, or with custom styles using our grid
                mixins.
        </p> */}

            <Row className="row-eq-height">
                <Col sm="12" md="12">
                    <Card>
                        <CardBody>
                            {/* <CardTitle>Users</CardTitle> */}
                            {/* <CardText>With supporting text below as a natural lead-in to additional content.</CardText> */}
                            <Form>
                                <div className="form-body">
                                    <h4 className="form-section">
                                        <ShoppingBag size={20} color="#212529" /> Vessels
                                    </h4>
                                    <Row>
                                        <Col md="12">
                                            <FormGroup>
                                                <Table
                                                    className={antdClass + antdClass2}
                                                    columns={columns}
                                                    dataSource={state.ListOfVessels}
                                                    pagination={{ position: ["bottomCenter"] }}
                                                    scroll={{ x: 'max-content', y: 200 }}
                                                />
                                            </FormGroup>
                                        </Col>
                                    </Row>

                                </div>
                            </Form>
                        </CardBody>
                    </Card>
                </Col>
            </Row>

            <Modal
                isOpen={state.editModal}
                toggle={editToggle}
                className={props.className}
                backdrop="static"
            >
                <ModalHeader toggle={editToggle}>Edit Vessel</ModalHeader>
                <ModalBody>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" >
                        Save
              </Button>{" "}
                    <Button color="secondary" >
                        Cancel
              </Button>
                </ModalFooter>
            </Modal>

            <Modal
                isOpen={state.createModal}
                toggle={createToggle}
                className={props.className}
                backdrop="static"
            >
                <ModalHeader toggle={createToggle}>Create New Vessel</ModalHeader>
                <ModalBody>

                </ModalBody>
                <ModalFooter>
                    <Button color="primary" >
                        Save
              </Button>{" "}
                    <Button color="secondary" onClick={handleCancelCreateVessel}>
                        Cancel
              </Button>
                </ModalFooter>
            </Modal>
        </React.Fragment>
    );
};

export default VesselsPage;
