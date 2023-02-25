module.exports.Message = {

    UserLogin:{
        SuccessMessage:{
            Create:"Login Successfully !"

        },
        FailureMessage:{
            Create:"Login Failed Please Try Again!",
            
        }
    },

    
    Common: {
        SuccessMessage: {
            Fetch(data = 'Data') { return `${data} fetched successfully !` },

            Creation(data = 'Data') { return `${data} created successfully !` },

            Send(data = 'Data') { return `${data} sent successfully !` },

            Updation(data = 'Data') { return `${data} updated successfully !` },
            Deletion(data = 'Data') { return `${data} Deleted successfully !` },
        },
        FailureMessage: {
            Fetch(data = 'Data') { return `${data} fetch failed, kindly retry !! ` },
            Send(data = 'Data') { return `${data} sent failed !` },

            Creation(data = 'Data') { return `${data} creation failed, kindly retry !!` },
            Updation(data = 'Data') { return `${data} updation failed, kindly retry !!` },
            Deletion(data = 'Data') { return `${data} deletion failed, kindly retry !!` },
            NotFound(data = 'Data') { return `No ${data}s found !!` },
            NoData: "No data found !",
            SomethingWnWrng: "Something went wrong we are trying to fix it. Please try again later !",
            TokenExpired: "Token expired !",
            InternalServerError: "Internal server error. Please try again later !",
            RowRefNotFound: "Reference not found please check and try again !",
            DataAlreadyExists: "Data already exists !",
            NoAccessToDelete: "No access to delete !",
            InvalidRef: "Invalid reference please check and try again !",
            NoAccess: "No access to this URL",
            ExistId:"Survey Id already exists !"

        }
    },

}